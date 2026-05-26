package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatTijarahRequest {
    @Min(0)
    private double stockValue;
    @Min(0)
    private double cashOnHand;
    @Min(0)
    private double receivables;
    @Min(0)
    private double payables;
    private double goldPricePerGram;
    private String currency = "DZD";
}
