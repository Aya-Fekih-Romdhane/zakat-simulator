package com.zakat.simulator.service;

import com.zakat.simulator.model.*;
import org.springframework.stereotype.Service;

@Service
public class ZakatService {

    private static final double GOLD_NISAB_GRAMS = 85.0;
    private static final double SILVER_NISAB_GRAMS = 595.0;
    private static final double AGRICULTURE_NISAB_KG = 653.0;
    private static final double ZAKAT_RATE = 0.025;

    public ZakatResult calculateZakatMal(ZakatMalRequest req) {
        double nisabValue = GOLD_NISAB_GRAMS * req.getGoldPricePerGram();
        double totalAssets = req.getCashSavings() + req.getBankDeposits()
                + req.getInvestments() + req.getDebtsOwedToYou() - req.getDebtsYouOwe();

        boolean zakatDue = totalAssets >= nisabValue;
        double zakatAmount = zakatDue ? totalAssets * ZAKAT_RATE : 0;

        return ZakatResult.builder()
                .type("Zakat al-Mal")
                .typeAr("زكاة المال")
                .zakatDue(zakatDue)
                .nisabValue(nisabValue)
                .totalAssets(totalAssets)
                .zakatAmount(zakatAmount)
                .zakatRate(ZAKAT_RATE * 100)
                .currency(req.getCurrency())
                .notes("Nisab = 85g of gold × price per gram")
                .notesAr("النصاب = 85 غرام ذهب × سعر الغرام")
                .build();
    }

    public ZakatResult calculateZakatGoldSilver(ZakatGoldSilverRequest req) {
        double goldValue = req.getGoldGrams() * req.getGoldPricePerGram();
        double silverValue = req.getSilverGrams() * req.getSilverPricePerGram();
        double nisabValue = GOLD_NISAB_GRAMS * req.getGoldPricePerGram();

        boolean goldZakatDue = req.getGoldGrams() >= GOLD_NISAB_GRAMS;
        boolean silverZakatDue = req.getSilverGrams() >= SILVER_NISAB_GRAMS;
        boolean zakatDue = goldZakatDue || silverZakatDue;

        double zakatAmount = 0;
        if (goldZakatDue) zakatAmount += goldValue * ZAKAT_RATE;
        if (silverZakatDue) zakatAmount += silverValue * ZAKAT_RATE;

        return ZakatResult.builder()
                .type("Zakat al-Dhahab wa al-Fiddah")
                .typeAr("زكاة الذهب والفضة")
                .zakatDue(zakatDue)
                .nisabValue(nisabValue)
                .totalAssets(goldValue + silverValue)
                .zakatAmount(zakatAmount)
                .zakatRate(ZAKAT_RATE * 100)
                .currency(req.getCurrency())
                .notes("Gold nisab: 85g | Silver nisab: 595g")
                .notesAr("نصاب الذهب: 85غ | نصاب الفضة: 595غ")
                .build();
    }

    public ZakatResult calculateZakatTijarah(ZakatTijarahRequest req) {
        double nisabValue = GOLD_NISAB_GRAMS * req.getGoldPricePerGram();
        double totalAssets = req.getStockValue() + req.getCashOnHand()
                + req.getReceivables() - req.getPayables();

        boolean zakatDue = totalAssets >= nisabValue;
        double zakatAmount = zakatDue ? totalAssets * ZAKAT_RATE : 0;

        return ZakatResult.builder()
                .type("Zakat al-Tijarah")
                .typeAr("زكاة التجارة")
                .zakatDue(zakatDue)
                .nisabValue(nisabValue)
                .totalAssets(totalAssets)
                .zakatAmount(zakatAmount)
                .zakatRate(ZAKAT_RATE * 100)
                .currency(req.getCurrency())
                .notes("Net commercial assets (stock + cash + receivables - payables)")
                .notesAr("صافي الأصول التجارية (بضاعة + نقدية + ذمم مدينة - ذمم دائنة)")
                .build();
    }

    public ZakatResult calculateZakatZiraa(ZakatZiraaRequest req) {
        double zakatRate = req.isNaturallyIrrigated() ? 0.10 : 0.05;
        boolean zakatDue = req.getHarvestKg() >= AGRICULTURE_NISAB_KG;
        double zakatAmount = zakatDue ? req.getHarvestKg() * zakatRate : 0;

        return ZakatResult.builder()
                .type("Zakat al-Ziraa")
                .typeAr("زكاة الزراعة")
                .zakatDue(zakatDue)
                .nisabValue(AGRICULTURE_NISAB_KG)
                .totalAssets(req.getHarvestKg())
                .zakatAmount(zakatAmount)
                .zakatRate(zakatRate * 100)
                .currency("KG")
                .notes(req.isNaturallyIrrigated() ? "Rain/river irrigated: 10% (Ushr)" : "Artificially irrigated: 5% (Half Ushr)")
                .notesAr(req.isNaturallyIrrigated() ? "سُقي بماء المطر أو النهر: العُشر 10%" : "سُقي بآلة أو بشراء الماء: نصف العُشر 5%")
                .build();
    }

    public ZakatResult calculateZakatMawashi(ZakatMawashiRequest req) {
        double zakatAmount = 0;
        StringBuilder notes = new StringBuilder();
        StringBuilder notesAr = new StringBuilder();
        boolean zakatDue = false;

        if (req.getCamels() >= 5) {
            zakatDue = true;
            double camelZakat = calculateCamelZakat(req.getCamels());
            zakatAmount += camelZakat;
            notes.append("Camels: ").append(camelZakat).append(" head due. ");
            notesAr.append("الإبل: ").append(camelZakat).append(" رأس واجب. ");
        }

        if (req.getCattle() >= 30) {
            zakatDue = true;
            double cattleZakat = calculateCattleZakat(req.getCattle());
            zakatAmount += cattleZakat;
            notes.append("Cattle: ").append(cattleZakat).append(" head due. ");
            notesAr.append("البقر: ").append(cattleZakat).append(" رأس واجب. ");
        }

        if (req.getSheep() >= 40) {
            zakatDue = true;
            double sheepZakat = calculateSheepZakat(req.getSheep());
            zakatAmount += sheepZakat;
            notes.append("Sheep/Goats: ").append(sheepZakat).append(" head due. ");
            notesAr.append("الغنم: ").append(sheepZakat).append(" رأس واجب. ");
        }

        return ZakatResult.builder()
                .type("Zakat al-Mawashi")
                .typeAr("زكاة المواشي")
                .zakatDue(zakatDue)
                .nisabValue(0)
                .totalAssets(req.getCamels() + req.getCattle() + req.getSheep())
                .zakatAmount(zakatAmount)
                .zakatRate(0)
                .currency("رؤوس / Heads")
                .notes(notes.isEmpty() ? "No zakat due — below nisab for all animals" : notes.toString())
                .notesAr(notesAr.isEmpty() ? "لا زكاة واجبة — لم يبلغ النصاب في أي صنف" : notesAr.toString())
                .build();
    }

    private double calculateCamelZakat(int camels) {
        if (camels < 5)  return 0;
        if (camels <= 9)  return 1;
        if (camels <= 14) return 2;
        if (camels <= 19) return 3;
        if (camels <= 24) return 4;
        if (camels <= 35) return 1;
        if (camels <= 45) return 1;
        if (camels <= 60) return 1;
        if (camels <= 75) return 1;
        return Math.floor(camels / 40.0);
    }

    private double calculateCattleZakat(int cattle) {
        if (cattle < 30) return 0;
        return Math.floor(cattle / 30.0);
    }

    private double calculateSheepZakat(int sheep) {
        if (sheep < 40)   return 0;
        if (sheep <= 120) return 1;
        if (sheep <= 200) return 2;
        if (sheep <= 300) return 3;
        return 3 + Math.floor((sheep - 300) / 100.0);
    }

    public ZakatResult calculateZakatFitr(ZakatFitrRequest req) {
        double zakatPerPerson = 2.5 * req.getStapleGrainPricePerKg();
        double totalZakat = req.getNumberOfPersons() * zakatPerPerson;

        return ZakatResult.builder()
                .type("Zakat al-Fitr")
                .typeAr("زكاة الفطر")
                .zakatDue(true)
                .nisabValue(0)
                .totalAssets(req.getNumberOfPersons())
                .zakatAmount(totalZakat)
                .zakatRate(0)
                .currency(req.getCurrency())
                .notes("2.5 kg of staple food per person")
                .notesAr("2.5 كيلوغرام من القوت الأساسي عن كل شخص")
                .build();
    }
}
