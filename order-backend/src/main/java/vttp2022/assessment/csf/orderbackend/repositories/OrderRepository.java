package vttp2022.assessment.csf.orderbackend.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import vttp2022.assessment.csf.orderbackend.models.Order;
import static vttp2022.assessment.csf.orderbackend.repositories.Queries.*;

@Repository
public class OrderRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean createOrder(Order order) {

        // convert the toppings list into a string seperated by commas
        String toppingsStr = String.join(",", order.getToppings());
        System.out.println(toppingsStr);

        return jdbcTemplate.update(SQL_INSERT_ORDER, 
            order.getName(), 
            order.getEmail(), 
            order.getSize(), 
            order.isThickCrust(), 
            order.getSauce(), 
            toppingsStr, 
            order.getComments()) > 0;
    }

}
