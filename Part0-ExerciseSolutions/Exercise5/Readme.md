sequenceDiagram
    participant browser
    participant server    

   

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: 'I love this course', date: '2023-11-25T08:55:34.115Z'}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes