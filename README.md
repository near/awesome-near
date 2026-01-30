# Awesome NEAR Ecosystem

A curated collection of repositories and tools for building on the NEAR Protocol blockchain.

NOTE: If you are looking for the products built on NEAR, check out [NEAR Catalog](https://nearcatalog.xyz/).

## Contents

- [Skills](#skills)
- [NEAR Protocol SDKs](#near-protocol-sdks)
- [Wallet and Authentication](#wallet-and-authentication)
- [CLI Tools](#cli-tools)
- [Starter Templates](#starter-templates)
- [Data Infrastructure](#data-infrastructure)
- [AI and Cloud Services](#ai-and-cloud-services)
- [Near Intents](#near-intents)
- [Shade Agent](#shade-agent)
- [Chain Signatures](#chain-signatures)
- [Explorers](#explorers)
- [Additional Resources](#additional-resources)

---

## Skills

| Package | Description |
|---------|-------------|
| [agent-skills](https://github.com/near/agent-skills) | AI agent skills for NEAR Protocol blockchain development |

---

## NEAR Protocol SDKs

### JavaScript / TypeScript

| Package | Description |
|---------|-------------|
| [near-api-js](https://github.com/near/near-api-js) | High-level JavaScript off-chain client for NEAR Protocol to get accounts, block, transactions, FT/NFT tokens information, and prepare & submit transactions, function calls |
| [near-api-ts](https://github.com/near/near-api-ts) | High-level TypeScript off-chain client for NEAR Protocol with type-safe API to get accounts, block, transactions, FT/NFT tokens information, and prepare & submit transactions, function calls |
| [near-kit](https://github.com/r-near/near-kit) | Modern TypeScript High-level TypeScript off-chain client with intuitive fetch-like API for NEAR Protocol to get accounts, block, transactions, FT/NFT tokens information, and prepare & submit transactions, function calls |
| [near-jsonrpc-client-ts](https://github.com/near/near-jsonrpc-client-ts) | Auto-generated TypeScript JSON-RPC client for NEAR Protocol (used under the hood by near-api-js, near-api-ts, near-kit) |

### Rust

| Package | Description |
|---------|-------------|
| [near-api-rs](https://github.com/near/near-api-rs) | High-level Rust off-chain client library for NEAR Protocol to get accounts, block, transactions, FT/NFT tokens information, and prepare & submit transactions, function calls |
| [near-openapi-client-rs](https://github.com/PolyProgrammist/near-openapi-client) | Auto-generated Rust JSON-RPC client for NEAR Protocol |
| [near-jsonrpc-client-rs](https://github.com/near/near-jsonrpc-client-rs) | Rust JSON-RPC client for NEAR Protocol (legacy) |
| [near-sdk-rs](https://github.com/near/near-sdk-rs) | Rust library for writing NEAR smart contracts |
| [nesdie](https://github.com/austinabell/nesdie/) | Rust no-std library for writing NEAR smart contracts |
| [near-abi-rs](https://github.com/near/near-abi-rs) | NEAR smart contract ABI primitives and models for Rust |


### Python

| Package | Description |
|---------|-------------|
| [py-near](https://github.com/pvolnov/py-near) | Async Python client with HOT Protocol and NEAR Intents support |
| [near-jsonrpc-client-py](https://github.com/near/near-jsonrpc-client-py) | Type-safe, Pythonic JSON-RPC client for NEAR Protocol with Pydantic models |
| [near-sdk-py](https://github.com/r-near/near-sdk-py)| Python library for writing NEAR smart contracts (great for onboarding Python devs to blockchain, but not recommended for production) |

### Swift

| Package | Description |
|---------|-------------|
| [near-jsonrpc-client-swift](https://github.com/space-rock/near-jsonrpc-swift) | Type-safe Swift JSON-RPC client with async/await support |

### Kotlin

| Package | Description |
|---------|-------------|
| [near-jsonrpc-client-kotlin](https://github.com/near/near-jsonrpc-client-kotlin) | Type-safe Kotlin Multiplatform client for NEAR JSON-RPC API with coroutines |

### Go

| Package | Description |
|---------|-------------|
| [near-sdk-go](https://github.com/vlmoon99/near-sdk-go) | Go library for writing NEAR smart contracts (experimental) |
| [near-api-go](https://github.com/aurora-is-near/near-api-go) | High-level Go off-chain client library for NEAR Protocol to get accounts, block, transactions, FT/NFT tokens information, and prepare & submit transactions, function calls |

### C# (.NET)

| Package | Description |
|---------|-------------|
| [near-sdk-c-sharp](https://github.com/vlmoon99/near-sdk-c-sharp) | Proof-of-concept C# library for writing NEAR smart contracts |

### Elixir

| Package | Description |
|---------|-------------|
| [near-sdk-elixir](https://github.com/vlmoon99/near-sdk-elixir) | Proof-of-concept Elixir library for writing NEAR smart contracts |

---

## Wallet and Authentication

| Package | Description |
|---------|-------------|
| [@hot-labs/near-connect](https://github.com/azbang/near-connect) | Secure, lightweight wallet connector with sandboxed execution environment |
| [near-connect-hooks](https://github.com/matiasbenary/near-connect-hooks) | React hooks for NEAR wallet integration using @hot-labs/near-connect |
| [near-sign-verify](https://github.com/elliotBraem/near-sign-verify) | Create and validate NEP-413 signed messages for API authentication |
| [better-near-auth](https://github.com/elliotBraem/better-near-auth) | Sign in with NEAR (SIWN) plugin for Better Auth framework |

---

## Near Intents

| Package | Description |
|---------|-------------|
| [One Click SDK TypeScript](https://github.com/defuse-protocol/one-click-sdk-typescript) | TypeScript SDK for seamless cross-chain token swaps via 1Click API |
| [One Click SDK Rust](https://github.com/defuse-protocol/one-click-sdk-rs) | Rust API client for One-Click cross-chain swaps |
| [One Click SDK Go](https://github.com/defuse-protocol/one-click-sdk-go) | Go API client for One-Click cross-chain swaps |
| [Near Intents AMM Solver](https://github.com/defuse-protocol/near-intents-amm-solver) | Sample Automated Market Maker (AMM) solver for NEAR Intents protocol |
| [contract-types](https://github.com/defuse-protocol/sdk-monorepo/tree/main/packages/contract-types) | TypeScript type definitions for Defuse Protocol contracts |
| [crosschain-assetid](https://github.com/defuse-protocol/sdk-monorepo/tree/main/packages/crosschain-assetid) | Cross-chain asset ID utilities for multi-chain token identification |
| [intents-sdk](https://github.com/defuse-protocol/sdk-monorepo/tree/main/packages/intents-sdk) | SDK for building intents-based applications on NEAR Intents protocol |
| [internal-utils](https://github.com/defuse-protocol/sdk-monorepo/tree/main/packages/internal-utils) | Internal utilities for Defuse SDK packages |

---

## CLI Tools

| Package | Description |
|---------|-------------|
| [near-cli-rs](https://github.com/near/near-cli-rs) | Human-friendly interactive CLI for NEAR Protocol interactions |
| [create-near-app](https://github.com/near/create-near-app) | Scaffold NEAR dApps with frontend and contract templates |
| [cargo-near](https://github.com/near/cargo-near) | Cargo extension for building and deploying Rust smart contracts with ABI generation |
| [near-validator-cli-rs](https://github.com/near/near-validator-cli-rs) | Human-friendly companion that helps to manage native NEAR stake and troubleshoot NEAR network |
| [bos-cli-rs](https://github.com/bos-cli-rs/bos-cli-rs) | CLI that simplifies local component development for NEAR BOS |

---

## Starter Templates

| Package | Description |
|---------|-------------|
| [near-ai-chat](https://github.com/jlwaugh/near-ai-chat) | AI chat agent starter kit for NEAR AI Cloud with verifiably private inference |
| [NEAR Playground](https://nearplay.app/) | Online IDE for NEAR smart contracts: From zero to deployed NEAR contract in 30 seconds. No downloads. No config. Just ship. |
| [every-plugin](https://github.com/near-everything/every-plugin) | Composable, type-safe plugin runtime framework for remote plugin loading |
| [near-sdk-rs-template](https://github.com/near/cargo-near-new-project-template) | GitHub Workspaces template for instant online IDE launch |
| [near-fast-ft-transfer](https://github.com/NEAR-DevHub/NEAR-fast-ft-transfer) | High-performance REST API service for batching and distributing NEAR Protocol fungible tokens (FT) |
| [Learn NEAR by Example](https://near.peersurf.xyz/) | Interactive learning platform with 60+ working smart contract examples, AI code assistant, and one-click TestNet deployment |

---

## Data Infrastructure

| Package | Description |
|---------|-------------|
| [Goldsky](https://goldsky.com/chains/near) | NEAR Protocol data infrastructure and indexing service |
| [Stream NEAR](https://stream.near.tools) | Server-Sent Events (SSE) stream for real-time NEAR block data |
| [Explorer API](https://github.com/fastnear/explorer-api) | Transaction-based explorer API for account transfers and block history |
| [Near Lake Indexer](https://github.com/aurora-is-near/near-lake-indexer) | NEAR Lake data indexing service for querying blockchain data |
| [Outlayer](https://outlayer.fastnear.com/) | Run any code with cryptographic proof that exactly the code you specified ran with the inputs you provided |

---

## Data APIs

| Package | Description |
|---------|-------------|
| [FastNear API](https://github.com/fastnear/fastnear-api-server-rs) | FastNear's low-latency API for wallets and explorers |
| [NearBlocks API](https://api.nearblocks.io/api-docs/) | NearBlock's REST APIs for accessing NEAR Protocol blockchain data |
| [Pikespeak API](https://doc.pikespeak.ai/) | Pikespeak's API for aggregated analytics on wallets, validators and dApps activity |
| [Allium API](https://docs.allium.so/api/developer/wallets/overview) | Allium's API focused on wallets and historical transactions  |

---

## AI and Cloud Services

| Package | Description |
|---------|-------------|
| [NEAR AI Cloud](https://cloud.near.ai) | Private inference platform for verifiably private AI inference |

---

## Shade Agent

| Package | Description |
|---------|-------------|
| [new-shade](https://github.com/NearDeFi/new-shade) | Experimental Shade agent framework with CLI tools, JavaScript SDK, and agent templates for TEE deployment |

---

## Chain Signatures

| Package | Description |
|---------|-------------|
| [chainsig.js](https://github.com/NearDeFi/chainsig.js) | TypeScript library for handling multi-chain transactions and signatures using MPC (Multi-Party Computation) |
| [omni-transaction-rs](https://github.com/near/omni-transaction-rs) | Rust library to build transactions for all chains |

---

## Explorers

- [NEAR Validate](https://nearvalidate.org/)
- [NearBlocks](https://nearblocks.io/)
- [PikeSpeak](https://pikespeak.ai/)
- [Near Intents Explorer](https://explorer.near-intents.org/)

## Additional Resources

- [NEAR Documentation](https://docs.near.org)
- [NEAR Developer Chat](https://discord.com/invite/nearprotocol)
- [NEAR Intens Documentation](https://docs.near-intents.org)
- [NEP Specifications](https://github.com/near/NEPs)
- [NEAR Blog](https://near.org/blog)
- [NEAR Catalog](https://nearcatalog.xyz/)

## Advanced Projects to Learn From

- [core-contracts](https://github.com/near/core-contracts) - collection of the early core NEAR Protocol contracts that are still widely used (the SDKs are outdated, but the concepts are still relevant)
- [omni-bridge](https://github.com/Near-One/omni-bridge) - one of the most advanced collection of NEAR Protocol smart contracts
- [sputnik-dao](https://github.com/near-daos/sputnik-dao-contract) - DAO contract implementation for NEAR Protocol

---

*To add a tool, submit a PR with: package name, one-line description.*
