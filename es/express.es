# use mime-types and helper function in module restful.
const (mime-types, is-espresso) (import "restful");

# import native express and body-parser packages.
const express (import "$express");
# extract request and response prototype.
const (request, response) express;

# the recommended Espresso MIME type by standard Espresso module restful.
export mime-espresso (mime-types first);

# a middleware to parse Espresso code/data in request body.
(export to-parse-es-body (=:is-espresso (=> (req, res, next)
  (if (is-espresso req)
    req "body" (eval (req "body");
  ).
  next;
).

# a middleware to tell web browser to allow code from any origin.
(export to-allow-any-origin (= (req, res, next)
  res header "Access-Control-Allow-Origin", "*";
  res header "Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE";
  res header "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept";
  next;
).

# create a plain express application.
(export app (=> ()
  express "call":: apply *, arguments:: generic;
).

# create an express application to serve as an api.
(export api (=> ()
  local retval (express "call":: apply *, arguments:: generic);
  retval use to-parse-es-body;
).

# create an express application to serve as a public api.
(export public-api (=> ()
  local retval (express "call":: apply *, arguments:: generic);
  retval use to-parse-es-body;
  retval use to-allow-any-origin;
).

# extend message prototypes to return generic app directly.
(for message in (@ request, response)
  message "es-app" (-> (this) (this "app":: generic);
).

# extends response to setup Content-Type, and
# optionally encode the body data as Espresso code.
(response "es", (=:mime-espresso (=> body # tidy up context by an instant closure.
  local retval this; # support currying.
  this header "Content-Type", mime-espresso;
  (if (arguments not-empty) # a null will also be sent to client side.
    this send ($body to-code:: to-string); # the body could be an operation.
  ).
).
