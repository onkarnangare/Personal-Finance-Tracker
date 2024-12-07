package tka.Personal.Finance.Tracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tka.Personal.Finance.Tracker.entity.Transaction;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(Long userId);
}
