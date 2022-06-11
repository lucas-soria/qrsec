package ar.edu.um.qrsec.qrsecbackend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class House {

    private String block;
    private Integer house;

}
