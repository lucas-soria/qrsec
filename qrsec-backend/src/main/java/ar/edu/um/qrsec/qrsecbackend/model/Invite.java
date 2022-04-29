package ar.edu.um.qrsec.qrsecbackend.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document
public class Invite {

    @Id
    private String id;
    @DocumentReference()
    private Owner owner;  // 626b5a262202bfa3692aa17c
    @DocumentReference()
    private Guest guest;  // 626b5ba42202bfa3692aa17e
    private List<String> days;
    private List<List<String>> hours;
    private Integer maxTime;
    private Integer passengers;
    private Boolean drop;
    private LocalDateTime arrival;
    private LocalDateTime departure;
    @CreatedDate
    private LocalDateTime created;
    @LastModifiedDate
    private LocalDateTime modified;

}
