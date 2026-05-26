package com.zakat.simulator.model;

import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class ZakatMawashiRequest {
    @Min(0)
    private int camels;
    @Min(0)
    private int cattle;
    @Min(0)
    private int sheep;
    private String currency = "DZD";
}
