#!/bin/bash


curl "http://localhost:4741/images/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
