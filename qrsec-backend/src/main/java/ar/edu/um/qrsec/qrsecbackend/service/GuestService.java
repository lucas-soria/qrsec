package ar.edu.um.qrsec.qrsecbackend.service;

import ar.edu.um.qrsec.qrsecbackend.model.Guest;
import ar.edu.um.qrsec.qrsecbackend.repository.GuestRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GuestService {

    @Autowired
    GuestRepository guestRepository;

    private static final Logger log = LoggerFactory.getLogger(InviteService.class);

    public List<Guest> findAll() {
        log.debug("Request to find all Guest");
        return guestRepository.findAll();
    }

}
