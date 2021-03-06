open Cohttp_lwt_unix
open Lwt

let uri = Uri.of_string "http://mockbin.com/har" in
let headers = Header.init ()
  |> fun h -> Header.add h "Accept" "application/json"
  |> fun h -> Header.add h "X-Foo" "Bar"
in

Client.call ~headers (Code.method_of_string "GET") uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)
