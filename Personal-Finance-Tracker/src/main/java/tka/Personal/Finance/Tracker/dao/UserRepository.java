package tka.Personal.Finance.Tracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tka.Personal.Finance.Tracker.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
