package com.example.demo.dto;

public class EnquiryDto {
    private Long id;
    private String courseName;
    private String description;
    private String mailId;
    private String enquiryType;

    public EnquiryDto() {
    }

    public EnquiryDto(Long id, String courseName, String description, String mailId, String enquiryType) {
        this.id = id;
        this.courseName = courseName;
        this.description = description;
        this.mailId = mailId;
        this.enquiryType = enquiryType;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMailId() {
        return mailId;
    }

    public void setMailId(String mailId) {
        this.mailId = mailId;
    }

    public String getEnquiryType() {
        return enquiryType;
    }

    public void setEnquiryType(String enquiryType) {
        this.enquiryType = enquiryType;
    }
}



