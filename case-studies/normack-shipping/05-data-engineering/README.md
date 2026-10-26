# Phase 05 — Data Engineering & Synthetic Enterprise Data

**Case study:** [NorMack Shipping LLC](../README.md)  
**Portfolio status:** Planned — working specification; not a completed client engagement  
**Data classification:** Fictional enterprise and synthetic data only

> **Portfolio note:** This page is a planned phase specification. Activities, findings, solutions and outcomes will be marked complete only after supporting artifacts are produced and validated. No real client contracts, operating results or confidential records are represented.

## Purpose

Create reproducible, privacy-safe enterprise datasets and engineered reporting layers aligned to the same operational story.

## NorMack scenario context

Generate **synthetic** customers, shipment orders, stops, dispatch events, scans, storage locations, dwell intervals, crate/pallet work orders, materials, suppliers, labor/time entries, invoices and costs. Share stable IDs across modules to support end-to-end lineage.

## Questions this phase will answer

Can a shipment be traced consistently from quote to delivery, storage, packaging work, invoice and margin?

## Work plan

1. Specify data contracts, source systems, cross-table keys, cardinality and realistic volume targets
2. Generate deterministic synthetic transactions with a documented random seed and versioned assumptions
3. Preserve clean ground truth alongside purposely injected data errors and a defect manifest
4. Build ingestion, cleaning, transformation, validation and publishing steps using SQL/Python/Fabric where feasible
5. Model dimensional facts and dimensions for shipment, invoice, storage, inventory, fabrication and service profitability
6. Document lineage, reconciliation rules, data-quality tests and repeatable rebuild instructions

## Deliverables and evidence checklist

- [ ] Synthetic data specifications and generator
- [ ] CSV/Parquet/SQL sample datasets and reference tables
- [ ] Issue injection manifest and ground-truth validation set
- [ ] ETL/ELT or Microsoft Fabric pipeline demonstration
- [ ] Data warehouse/semantic model and lineage documentation

## Completion and review criteria

- All listed deliverables have working links and clear version/status labels.
- Business assertions cite scenario records, analysis or approved assumptions.
- Requirements and technical artifacts use consistent IDs and links to dependent phases.
- Any public dataset uses synthetic records only; no secrets, customer data or company documents.
- Unfinished functionality is labeled **Planned**, **Prototype**, or **Simulation** rather than complete.

**Expected phase outcome:** Reproducible, internally consistent synthetic data with documented defects and verification results.

## Artifacts and demonstrations

*Links will be added here as work is completed.* Avoid linking to nonexistent files.

## Navigation

[← Previous: Process & Solution Design](../04-solution-design/README.md) · [Next: Applications & Workflow Automation →](../06-applications/README.md)

[↥ NorMack case-study introduction](../README.md) · [↥ Main portfolio](../../../README.md)
