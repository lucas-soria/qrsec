package ar.edu.um.qrsec.qrsecbackend;

import ar.edu.um.qrsec.qrsecbackend.domain.model.Role;
import ar.edu.um.qrsec.qrsecbackend.domain.model.User;
import ar.edu.um.qrsec.qrsecbackend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class QrsecBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(QrsecBackendApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
			return new BCryptPasswordEncoder();
	}

}
