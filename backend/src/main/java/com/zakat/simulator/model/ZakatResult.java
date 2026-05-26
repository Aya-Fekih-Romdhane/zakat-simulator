package com.zakat.simulator.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ZakatResult {
    private String type;
    private String typeAr;
    private boolean zakatDue;
    private double nisabValue;
    private double totalAssets;
    private double zakatAmount;
    private double zakatRate;
    private String currency;
    private String notes;
    private String notesAr;
}
