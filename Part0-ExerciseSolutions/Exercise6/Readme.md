sequenceDiagram
    participant browser
    participant server

    

   

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_notes_spa
    activate server
    server-->>browser: [{'message': 'note created'} ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes