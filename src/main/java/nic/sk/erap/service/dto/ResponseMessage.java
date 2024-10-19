package nic.sk.erap.service.dto;

import java.io.Serializable;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

public class ResponseMessage implements Serializable {

    String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
