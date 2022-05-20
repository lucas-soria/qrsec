package ar.edu.um.qrsec.qrsecbackend.service;

import ar.edu.um.qrsec.qrsecbackend.model.Invite;
import ar.edu.um.qrsec.qrsecbackend.repository.InviteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class InviteService {

    @Autowired
    InviteRepository inviteRepository;

    private static final Logger log = LoggerFactory.getLogger(InviteService.class);

    public Invite save(Invite invite) {
        log.debug("Request to save Invite : {}", invite);
        // TODO: Set owner as current logged user
        invite.setCreated(LocalDateTime.now());
        invite.setModified(invite.getCreated());
        invite = inviteRepository.save(invite);
        return invite;
    }

    public Optional<Invite> findOne(String id) {
        log.debug("Request to find Invite : {}", id);
        Optional<Invite> invite = inviteRepository.findById(id);
        return invite;
    }

    public List<Invite> findAll() {
        log.debug("Request to find all Invite");
        return inviteRepository.findAll();
    }

}
