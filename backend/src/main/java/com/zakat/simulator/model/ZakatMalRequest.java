package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatMalRequest {
    @Min(0)
    private double cashSavings;
    @Min(0)
    private double bankDeposits;
    @Min(0)
    private double investments;
    @Min(0)
    private double debtsOwedToYou;
    @Min(0)
    private double debtsYouOwe;
    private double goldPricePerGram;
    private String currency = "DZD";
}
