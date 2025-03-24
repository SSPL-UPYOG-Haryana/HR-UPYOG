package org.upyog.service;

import javax.validation.Valid;

import org.egov.common.contract.request.RequestInfo;
import org.upyog.web.models.CommonDetails;

public interface CommonService {
    CommonDetails getApplicationCommonDetails(@Valid RequestInfo requestInfo, String moduleName, String applicationNumber, String tenantId);
}

