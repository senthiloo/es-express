(define "express" (= ()
  const express (import "./express");

  (should "(express mime-espresso) is 'application/x-espresso'." (=> ()
    assert (express mime-espresso:: is-a string);
    assert "application/x-espresso", (express mime-espresso);
  ).
  (should '(express "to-parse-es-body") is a middleware' (=> ()
    var (to-parse-es-body) express;
    assert ($to-parse-es-body is-a function);
    assert "application/x-espresso", (express mime-espresso);

    assert 3 ($to-parse-es-body parameters:: length);
    assert (` req) ($to-parse-es-body parameters:: first);
    assert (` res) ($to-parse-es-body parameters:: (2 nd);
    assert (` next) ($to-parse-es-body parameters:: last);
  ).
  (should '(express "to-allow-any-origin") is a middleware' (=> ()
    var (to-allow-any-origin) express;
    assert ($to-allow-any-origin is-a lambda);
    assert "application/x-espresso", (express mime-espresso);

    assert 3 ($to-allow-any-origin parameters:: length);
    assert (` req) ($to-allow-any-origin parameters:: first);
    assert (` res) ($to-allow-any-origin parameters:: (2 nd);
    assert (` next) ($to-allow-any-origin parameters:: last);
  ).
  (should "(express app) returns an express app object." (=> ()
    var app (express app);
    assert (app is-an object);

    assert (app "call":: is-a function);
    assert (app "new":: is-a function);
    assert (app "use":: is-a function);
  ).
  (should "(express api) returns an express app object." (=> ()
    var app (express api);
    assert (app is-an object);

    assert (app "call":: is-a function);
    assert (app "new":: is-a function);
    assert (app "use":: is-a function);
  ).
  (should "(express public-api) returns an express app object." (=> ()
    var app (express public-api);
    assert (app is-an object);

    assert (app "call":: is-a function);
    assert (app "new":: is-a function);
    assert (app "use":: is-a function);
  ).

  (define "$express" (= ()
    const express_ (import "$express");

    (define "request" (=> ()
      var (request) express_;

      (should "(request 'es-app') is a static lambda." (=> ()
        assert (request "es-app":: is-a lambda);
        assert (request "es-app":: is-static);
      ).
    ).

    (define "response" (=> ()
      var (response) express_;

      (should "(response 'es-app') is a static lambda." (=> ()
        assert (response "es-app":: is-a lambda);
        assert (response "es-app":: is-static);
      ).
      (should "(response 'es') is a function." (=> ()
        assert (response "es":: is-a function);

        assert 1 (response "es":: parameters:: length);
        assert (` body) (response "es":: parameters:: first);
      ).
      (should "(response 'body') is a lambda." (=> ()
        assert (response "body":: is-a lambda);

        assert 1 (response "body":: parameters:: length);
        assert (` data) (response "body":: parameters:: first);
      ).
    ).
).
