# kryptand-login-container



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                | Default     |
| -------- | --------- | ----------- | ------------------- | ----------- |
| `theme`  | `theme`   |             | `"dark" \| "light"` | `undefined` |


## Dependencies

### Depends on

- [kryptand-centered-card](../../../../shared/ui/src/components/centered-card)
- [kryptand-introduction-card](../../../../shared/ui/src/components/introduction-card)
- [kryptand-product-icon](../../../../shared/ui/src/components/product-icon)
- kryptand-translate
- [kryptand-login-form](../login-form)
- [kryptand-external-logins](../../../../shared/ui/src/components/external-logins)

### Graph
```mermaid
graph TD;
  kryptand-login-container --> kryptand-centered-card
  kryptand-login-container --> kryptand-introduction-card
  kryptand-login-container --> kryptand-product-icon
  kryptand-login-container --> kryptand-translate
  kryptand-login-container --> kryptand-login-form
  kryptand-login-container --> kryptand-external-logins
  kryptand-external-logins --> kryptand-translate
  style kryptand-login-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
