package org.egov.user.web.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.egov.common.contract.response.Error;
import org.egov.common.contract.response.ErrorResponse;
import org.egov.common.contract.response.ResponseInfo;
import org.egov.user.domain.model.TokenWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogoutController {

	private TokenStore tokenStore;

	public LogoutController(TokenStore tokenStore) {
		this.tokenStore = tokenStore;
	}

	/**
	 * End-point to logout the session.
	 *
	 * @param
	 * @return
	 * @throws Exception
	 */
//    @PostMapping("/_logout")
//    public ResponseInfo deleteToken(@RequestBody TokenWrapper tokenWrapper) throws Exception {
//        String accessToken = tokenWrapper.getAccessToken();
//        OAuth2AccessToken redisToken = tokenStore.readAccessToken(accessToken);
//        tokenStore.removeAccessToken(redisToken);
//        return new ResponseInfo("", "", System.currentTimeMillis(), "", "", "Logout successfully");
//    }

	@PostMapping("/_logout")
	public ResponseInfo deleteToken(@RequestBody TokenWrapper tokenWrapper, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		String accessToken = tokenWrapper.getAccessToken();

		// Remove OAuth token
		if (accessToken != null && !accessToken.trim().isEmpty()) {

			OAuth2AccessToken redisToken = tokenStore.readAccessToken(accessToken);

			if (redisToken != null) {
				tokenStore.removeAccessToken(redisToken);
			}
		}

		// Clear Spring Security context
		SecurityContextHolder.clearContext();

		// Clear tenant context
//        TenantContext.clear();

		// Invalidate HTTP session
		HttpSession session = request.getSession(false);

		if (session != null) {
			session.invalidate();
		}

		// Clear browser session cookie
		Cookie jsessionCookie = new Cookie("JSESSIONID", null);
		jsessionCookie.setMaxAge(0);
		jsessionCookie.setPath("/");
		jsessionCookie.setHttpOnly(true);
		response.addCookie(jsessionCookie);

		// Clear tenant cookie if your application has one
		Cookie tenantCookie = new Cookie("tenantId", null);
		tenantCookie.setMaxAge(0);
		tenantCookie.setPath("/");

		response.addCookie(tenantCookie);
		return new ResponseInfo("", "", System.currentTimeMillis(), "", "", "Logout successfully");
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleError(Exception ex) {
		ex.printStackTrace();
		ErrorResponse response = new ErrorResponse();
		ResponseInfo responseInfo = new ResponseInfo("", "", System.currentTimeMillis(), "", "", "Logout failed");
		response.setResponseInfo(responseInfo);
		Error error = new Error();
		error.setCode(400);
		error.setDescription("Logout failed");
		response.setError(error);
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}
}