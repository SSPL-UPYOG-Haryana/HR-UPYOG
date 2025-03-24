/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 * accountability and the service delivery of the government  organizations.
 *
 *  Copyright (C) 2016  eGovernments Foundation
 *
 *  The updated version of eGov suite of products as by eGovernments Foundation
 *  is available at http://www.egovernments.org
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see http://www.gnu.org/licenses/ or
 *  http://www.gnu.org/licenses/gpl.html .
 *
 *  In addition to the terms of the GPL license to be adhered to in using this
 *  program, the following additional terms are to be complied with:
 *
 *      1) All versions of this program, verbatim or modified must carry this
 *         Legal Notice.
 *
 *      2) Any misrepresentation of the origin of the material is prohibited. It
 *         is required that all modified versions of this material be marked in
 *         reasonable ways as different from the original version.
 *
 *      3) This license does not grant any rights to any user of the program
 *         with regards to rights under trademark law for use of the trade names
 *         or trademarks of eGovernments Foundation.
 *
 *  In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */

package org.egov.dx.web.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.egov.common.contract.response.ResponseInfo;
import org.egov.dx.service.eSignService;
import org.egov.dx.util.Configurations;
import org.egov.dx.web.models.RequestInfoWrapper;
import org.egov.dx.web.models.ResponseInfoFactory;
import org.egov.dx.web.models.Transaction;
import org.egov.dx.web.models.TransactionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;



@RestController
@RequestMapping("/eSign")
public class eMudraController {
	
	
	@Autowired
	ResponseInfoFactory responseInfoFactory;
	
	@Autowired
	eSignService esignService;
	
	@Autowired
	Configurations configurations;
	
    @RequestMapping("/process")
    public ResponseEntity<String> processPDF(@Valid @RequestBody RequestInfoWrapper requestInfoWrapper) throws URISyntaxException {
        try {
            String responseUrl = esignService.processPDF(requestInfoWrapper);
            return new ResponseEntity<>(responseUrl, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error processing PDF: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @RequestMapping("/redirect")
    public ResponseEntity<Object> getEsignedPDF(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        try {
           String ff = esignService.getEsignedPDF( request, response);

            HttpHeaders httpHeaders = new HttpHeaders();
//            httpHeaders.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=report.pdf");
//            httpHeaders.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE);
            StringBuilder redirectURL = new StringBuilder();
            redirectURL.append(configurations.getUIURL()+"?filestore="+ff);
            httpHeaders.setLocation(UriComponentsBuilder.fromHttpUrl(redirectURL.toString())
                    .queryParams(null).build().encode().toUri());
            return new ResponseEntity<>(httpHeaders, HttpStatus.FOUND);

                   
        } catch (IOException e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }  
    
    
    @RequestMapping(value = "/filestoreId/v1/_search", method = RequestMethod.POST)
    public ResponseEntity<TransactionResponse> searchSignedFilestore(@RequestBody RequestInfoWrapper requestInfoWrapper, @RequestParam Map<String, String> params) {

		List<Transaction> transactions = esignService.getSignedFilestore(requestInfoWrapper.getRequestInfo(), requestInfoWrapper.getTransaction());
		ResponseInfo responseInfo=ResponseInfoFactory.createResponseInfoFromRequestInfo(requestInfoWrapper.getRequestInfo(), null);

		TransactionResponse response = new TransactionResponse(responseInfo, transactions);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
}
    