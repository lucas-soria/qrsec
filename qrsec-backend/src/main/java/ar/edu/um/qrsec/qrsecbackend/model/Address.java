package ar.edu.um.qrsec.qrsecbackend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Address {

    @Id
    private String id;
    private String street;
    private Integer number;
    private House house;

}
