package ar.edu.um.qrsec.qrsecbackend.repository;

import ar.edu.um.qrsec.qrsecbackend.domain.model.Invite;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InviteRepository extends MongoRepository<Invite, String> {}
