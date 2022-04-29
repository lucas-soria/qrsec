package ar.edu.um.qrsec.qrsecbackend.controller.rest;

import ar.edu.um.qrsec.qrsecbackend.model.Guest;
import ar.edu.um.qrsec.qrsecbackend.model.Invite;
import ar.edu.um.qrsec.qrsecbackend.repository.GuestRepository;
import ar.edu.um.qrsec.qrsecbackend.service.GuestService;
import ar.edu.um.qrsec.qrsecbackend.service.InviteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "${qrsec.frontend}")
@RestController
@RequestMapping("${api.path}")
public class GuestController {

    @Autowired
    GuestService guestService;

    private static final Logger log = LoggerFactory.getLogger(InviteController.class);

    @GetMapping("${api.path.guest}")
    public List<Guest> getGuests() {
        log.debug("REST request to get all Invite");
        return guestService.findAll();
    }

}
