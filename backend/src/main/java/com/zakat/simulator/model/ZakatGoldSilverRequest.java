package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatGoldSilverRequest {
    @Min(0)
    private double goldGrams;
    @Min(0)
    private double silverGrams;
    @Min(0)
    private double goldPricePerGram;
    @Min(0)
    private double silverPricePerGram;
    private String currency = "DZD";
}
