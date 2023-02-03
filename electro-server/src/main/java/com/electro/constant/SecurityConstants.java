package com.electro.constant;

public interface SecurityConstants {
    String[] ADMIN_API_PATHS = {};

    String[] CLIENT_API_PATHS = {
            "/client-api/users/**",
            "/client-api/wishes/**",
            "/client-api/preorders/**",
            "/client-api/notifications/**"
    };

    String[] IGNORING_API_PATHS = {
            "/client-api/notifications/events"
    };

    interface Role {
        String ADMIN = "ADMIN";

        String EMPLOYEE = "EMPLOYEE";

        String CUSTOMER = "CUSTOMER";
    }
}
