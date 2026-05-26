package com.zakat.simulator.controller;

import com.zakat.simulator.model.*;
import com.zakat.simulator.service.ZakatService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/zakat")
@RequiredArgsConstructor
public class ZakatController {

    private final ZakatService zakatService;

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("بسم الله الرحمن الرحيم — Zakat Simulator API running");
    }

    @PostMapping("/mal")
    public ResponseEntity<ZakatResult> calculateZakatMal(@Valid @RequestBody ZakatMalRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatMal(request));
    }

    @PostMapping("/gold-silver")
    public ResponseEntity<ZakatResult> calculateZakatGoldSilver(@Valid @RequestBody ZakatGoldSilverRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatGoldSilver(request));
    }

    @PostMapping("/tijarah")
    public ResponseEntity<ZakatResult> calculateZakatTijarah(@Valid @RequestBody ZakatTijarahRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatTijarah(request));
    }

    @PostMapping("/ziraa")
    public ResponseEntity<ZakatResult> calculateZakatZiraa(@Valid @RequestBody ZakatZiraaRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatZiraa(request));
    }

    @PostMapping("/mawashi")
    public ResponseEntity<ZakatResult> calculateZakatMawashi(@Valid @RequestBody ZakatMawashiRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatMawashi(request));
    }

    @PostMapping("/fitr")
    public ResponseEntity<ZakatResult> calculateZakatFitr(@Valid @RequestBody ZakatFitrRequest request) {
        return ResponseEntity.ok(zakatService.calculateZakatFitr(request));
    }
}
