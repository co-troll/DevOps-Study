// 요청을 받으면 파싱을 해서 사용
const SPACE = " ";
const NEW_LINE = "\r\n";
const GUILLOTINE = NEW_LINE + NEW_LINE;
const START_LINE_NAMES = ["method", "url", "version"];

// 헤더가 어디까지 인지 인덱스 찾을 함수
const getHeaderEndIndex = (request) => request.indexOf(GUILLOTINE);

// 요청 데이터 시작 라인 추출할 함수
const getStartLine = (startLineString) => {
    // startLineString == GET /?index=1&city=2 HTTP/1.1
    const startLine = startLineString.split(SPACE) // ["GET", "/", "HTTP/1.1"]
        .map((v, i) => [START_LINE_NAMES[i], v]) // [["method", "GET"], ["url", "/?index=1&city=2"], ["version", "HTTP/1.1"]]
        .reduce((acc, line) => {
            const [key, value] = line;
            acc[key] = value;
            return acc; 
        }, {}); // {"method": "GET", "url": "/?index=1&city=2", "version": "HTTP/1.1"}

    // indexOf 값을 찾으면 인덱스반환 없으면 -1;
    const queryStringEndIndex = startLine.url.indexOf("?"); // /?index=1&city=2 => 1
    const isQuery = queryStringEndIndex !== -1;
    if (isQuery) {
        // 쿼리문자열이 있으면 객체로 변환
        const queryString = startLine.url.slice(queryStringEndIndex + 1);
        // 쿼리 문자열 처리 할 함수
        const query = getQuery(queryString);

        startLine.query = query;
        startLine.url = startLine.url.slice(0, queryStringEndIndex);
    }
    return startLine;
}

// 쿼리 문자열 파싱 객체로 변환할 함수
const getQuery = (queryString) => {
    if (queryString.length === 0) 
        return null;
    // queryString == index=1&city=2
    const query = queryString.split("&") // ["index=1", "city=2"]
        .map((v) => v.split("=")) // [["index", "1"], ["city", "2"]]
        .reduce((acc, line) => {
            const [key, value] = line;
            acc[key] = value;
            return acc
        }, {}) // {"index": "1", "city": "2"}
    return query;
}

// 헤더의 정보를 만들 함수
const getHeaders = (headerString) => {
    const headerLine = headerString.split(NEW_LINE);
    // shift 배열에서 첫번째 인덱스 내보내기
    const startLineString = headerLine.shift();
    const startLine = getStartLine(startLineString);

    // 헤더의 정보를 객체로 변환
    const headers = headerLine.reduce((acc, line) => {
        const [key, value] = line.split(": ");
        acc[key] = value;
        return acc;
    }, {})
    return { startLine, headers };
}


// 요청 데이터 최종 파싱 함수
const getRequest = (buffer) => {
    const headerEndIndex = getHeaderEndIndex(buffer);
    const isHeaderPending = headerEndIndex === -1;
    
    if (isHeaderPending) 
        return null;
    
    // ...bodyString 스프레드 연산자 
    const [headerString, ...bodyString] = buffer.toString().split(GUILLOTINE);
    const body = bodyString.join(GUILLOTINE); // body 문자열로 변환
    
    const header = getHeaders(headerString); // header 객체 생성

    return { ...header, body }
}

module.exports = getRequest;