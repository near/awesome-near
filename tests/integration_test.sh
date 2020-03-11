#!/bin/bash

EXAMPLES=('https://github.com/nearprotocol/token-contract-as') # 'https://github.com/nearprotocol/counter')

for i in "${EXAMPLES[@]}"
do
  mkdir example
	git clone $i example
  cd example
  yarn install
  yarn build
  yarn test
  rm -rf example
done
