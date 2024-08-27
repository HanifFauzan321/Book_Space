package com.library.jafa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistrationDto {

    private String name;
    private Integer age; // yyyy - MM - dd ISO_8601
    private String gender;
    private String Address;
    private String photo;
    private String email;
    private String password;

    

}
