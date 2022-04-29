package ar.edu.um.qrsec.qrsecbackend.repository;

import ar.edu.um.qrsec.qrsecbackend.model.Guest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GuestRepository extends MongoRepository<Guest, String> {}
