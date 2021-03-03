# Example Subgraph

An example to help you get started with The Graph. For more information see the docs on https://thegraph.com/docs/.

## 1

```javascript

  1. Run `graph auth https://api.thegraph.com/deploy/ <access-token>`
     to authenticate with the hosted service. You can get the access token from
     https://thegraph.com/explorer/dashboard/.

  2. Type `cd hzzhelloworld` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph to
     https://thegraph.com/explorer/subgraph/hzz780/hzzhelloworld.
```

## 2

graph init --from-example hzz780/hzzhelloworld hzzhelloworld

```javascript
graph deploy \      
    --debug \
    --node https://api.thegraph.com/deploy/ \
    --ipfs https://api.thegraph.com/ipfs/ \
    hzz780/hzzhelloworld
```

## 3. 日常维护

```text
看package.json的script
yarn codegen
yarn build
yarn deploy
```

## 4. 区分网络部署

```text
https://thegraph.com/docs/deploy-a-subgraph#deploying-the-subgraph-to-multiple-ethereum-networks

见 config文件内容和 subgraph.template.yaml
以及 yarn deploy:mainnet 示例
```



