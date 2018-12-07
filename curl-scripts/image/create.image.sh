#!/bin/bash
# TOKEN: BAhJIiVhZjY1OTQ5ZTU4OGYwZmNjZjk4ODNkNGZkZjdjYWFjMAY6BkVG--1c1a3474b8362543c383fb2364e06cbc60c5cbae
curl "http://localhost:4741/images" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "image": {
      "date": "'"${DATE}"'",
      "caption": "'"${CAP}"'",
      "url": "'"${URL}"'",
      "user_id": "'"${U_ID}"'"
    }
  }'

echo
