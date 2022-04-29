package ar.edu.um.qrsec.qrsecbackend.repository;

import ar.edu.um.qrsec.qrsecbackend.model.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OwnerRepository extends MongoRepository<Owner, String> {}
