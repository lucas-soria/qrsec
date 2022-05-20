package ar.edu.um.qrsec.qrsecbackend.controller.rest;

import ar.edu.um.qrsec.qrsecbackend.model.Guest;
import ar.edu.um.qrsec.qrsecbackend.service.GuestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.path}")
public class GuestController {

    @Autowired
    GuestService guestService;

    private static final Logger log = LoggerFactory.getLogger(InviteController.class);

    @PostMapping("${api.path.guest}")
    public Guest createGuest(@RequestBody Guest guest) {
        log.debug("REST request to save Guest : {}", guest);
        return guestService.save(guest);
    }

    @GetMapping("${api.path.guest}")
    public List<Guest> getGuests() {
        log.debug("REST request to get all Invite");
        return guestService.findAll();
    }

}
