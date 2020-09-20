# kryptand-login-register-form



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `buttonLabel` | `button-label` |             | `string` | `undefined` |


## Events

| Event        | Description | Type                                                |
| ------------ | ----------- | --------------------------------------------------- |
| `formSubmit` |             | `CustomEvent<{ email: string; password: string; }>` |


## Dependencies

### Depends on

- [kryptand-text-button](../text-button)
- kryptand-translate

### Graph
```mermaid
graph TD;
  kryptand-login-register-form --> kryptand-text-button
  kryptand-login-register-form --> kryptand-translate
  style kryptand-login-register-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
