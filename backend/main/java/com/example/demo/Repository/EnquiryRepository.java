package com.example.demo.Repository;

import com.example.demo.Model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {
    // You can define custom query methods if needed
}
