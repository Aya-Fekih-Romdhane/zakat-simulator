package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatZiraaRequest {
    @Min(0)
    private double harvestKg;
    private boolean naturallyIrrigated; // true = 10%, false = 5%
    private String currency = "DZD";
    // Nisab for agriculture: 653 kg (5 wasaq)
}
