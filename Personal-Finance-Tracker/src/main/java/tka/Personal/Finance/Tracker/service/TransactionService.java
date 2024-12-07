package tka.Personal.Finance.Tracker.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.MergedAnnotationCollectors;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tka.Personal.Finance.Tracker.dao.TransactionRepository;
import tka.Personal.Finance.Tracker.entity.Transaction;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getTransactions(Long userId) {
        return transactionRepository.findByUserId(userId);
    }
}
