#!/bin/bash

EXAMPLES=(
  https://github.com/near-examples/counter
  https://github.com/near-examples/guest-book
  https://github.com/near-examples/pow-faucet
  https://github.com/near-examples/rust-counter
  https://github.com/near-examples/rust-fungible-token
  https://github.com/near-examples/rust-high-level-cross-contract
  https://github.com/near-examples/rust-status-message
  https://github.com/near-examples/token-contract-as
  https://github.com/near-examples/token-printer
  https://github.com/near-examples/wallet-example
)

# TODO=('https://github.com/nearprotocol/corgis'
#       )

if [ ! -d "examples" ]; then
  mkdir examples
fi

cd examples

for i in "${EXAMPLES[@]}"; do
  name=$(basename "$i");
  printf "\n\n========== testing \e[1;34m$name\e[0m ==========\n"

  if test -d "./$name"; then
    (cd "$name" && git pull);
  else
    git clone "$i"
  fi

  cd $name
  if test -f package.json; then
    yarn install; yarn build; yarn test
  elif test -d contract*; then
    cd contract*; cargo build; cargo test -- --nocapture; cd ..
  else
    echo "Don't know how to test $name 😳"
    exit 1
  fi
  cd ..
done
