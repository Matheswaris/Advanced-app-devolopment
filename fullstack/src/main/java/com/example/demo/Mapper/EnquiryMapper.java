package com.example.demo.Mapper;

import com.example.demo.dto.EnquiryDto;
import com.example.demo.Model.Enquiry;

public class EnquiryMapper {

    public static EnquiryDto toDto(Enquiry enquiry) {
        return new EnquiryDto(
                enquiry.getId(),
                enquiry.getCourseName(),
                enquiry.getDescription(),
                enquiry.getMailId(),
                enquiry.getEnquiryType());
    }

    public static Enquiry toEntity(EnquiryDto enquiryDto) {
        return new Enquiry(
                enquiryDto.getCourseName(),
                enquiryDto.getDescription(),
                enquiryDto.getMailId(),
                enquiryDto.getEnquiryType());
    }
}