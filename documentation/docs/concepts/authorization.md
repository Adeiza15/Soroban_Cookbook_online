---
sidebar_position: 6
title: Authorization
description: Implement secure authorization patterns in Soroban contracts — identity validation, role-based access control, and permission management for sensitive operations.
---

# Authorization
Authorization in Soroban ensures only expected identities can execute sensitive contract actions.

## Typical Access Patterns

- Owner/admin-only functions
- Role-based permissions for operators
- User-signed operations for account-scoped actions

## Best Practices

1. Validate caller identity before mutating state.
2. Keep privileged surfaces small and explicit.
3. Emit events for sensitive operations.
4. Add tests for unauthorized access attempts.

## Common Protected Operations

- Setting admins or governance parameters
- Mint/burn operations in token-like contracts
- Upgrading contract logic or config

## Related Examples

The [multisig-wallet pattern](/docs/patterns/multisig-wallet) demonstrates M-of-N authorization, where a configurable threshold of signers must approve a transaction before it can be executed. See the [source code](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/tree/main/examples/multisig-wallet) for implementation details.

## Next

- [Security Fundamentals](../security/fundamentals.md)
- [Token Pattern Security Audit](../security/token-audit.md)
- [Storage Patterns)](./storage.md)
- [Events](./events.md)
