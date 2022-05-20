package ar.edu.um.qrsec.qrsecbackend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Data
@Document
public class Owner {

    @Id
    private String id;
    @Indexed(unique = true)
    private String email;
    private String password;
    private Authority authority;
    private String firstName;
    private String lastName;
    @Indexed(unique = true)
    private String dni;
    @DocumentReference
    private Address address;
    private String phone;

}
