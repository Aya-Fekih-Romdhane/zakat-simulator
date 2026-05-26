package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatFitrRequest {
    @Min(1)
    private int numberOfPersons;
    @Min(0)
    private double stapleGrainPricePerKg;
    private String currency = "DZD";
    // Standard: 2.5 kg per person of staple food
}
