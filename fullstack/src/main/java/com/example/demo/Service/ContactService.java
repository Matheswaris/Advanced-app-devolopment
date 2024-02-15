package com.example.demo.Service;

import com.example.demo.Model.Contact;
import com.example.demo.dto.ContactDto;
import com.example.demo.Mapper.ContactMapper;
import com.example.demo.Repository.ContactRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = ContactMapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return ContactMapper.toDto(contact);
    }
    
    public List<ContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream()
                .map(ContactMapper::toDto) // Corrected method invocation
                .collect(Collectors.toList());
    }

    // If you need to implement other service methods, you can add them here

}
