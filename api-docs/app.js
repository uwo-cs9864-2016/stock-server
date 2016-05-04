'use strict';

/**
 * @api {get} /info Request server state information
 * @apiVersion 0.0.1
 * @apiName GetInfo
 * @apiGroup Info
 *
 * @apiSuccess {String} nowish Date that the server thinks.
 * @apiSuccess {String} state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nowish": "2011-01-13T09:45:32",
 *       "state": "STARTED"
 *     }
 */

/**
 * @api {get} /now Get the time of the server
 * @apiVersion 0.0.1
 * @apiName GetNow
 * @apiGroup Info
 *
 * @apiSuccess {Date} nowish Time on the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nowish": "2011-01-13T09:45:32"
 *     }
 */

/**
 * @api {put} /register Register a new end point to publish to. 
 * @apiVersion 0.0.1
 * @apiName Register
 * @apiGroup Endpoints
 * 
 * @apiParam  {String}          href  Location to post to.
 * @apiParam  {String=POST|PUT} verb  Method to use when publishing.
 *
 * @apiSuccess {Boolean=true}           success true if successful. 
 * @apiSuccess {String} info.nowish Date that the server thinks.
 * @apiSuccess {String} info.state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "info": {
 *         "nowish": "2011-01-13T09:45:32",
 *         "state": "STARTED"
 *       }
 *     }
 * 
 * @apiError {Boolean=false}  success false 
 * @apiError {Error}          error   Error that occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Bad-Request
 *     {
 *       "success": false,
 *       "error": "Invalid EndPoint"
 *     }
 */

/**
 * @api {delete} /register Removes an end point from publishing. 
 * @apiVersion 0.0.1
 * @apiName Register
 * @apiGroup Endpoints
 * 
 * @apiParam  {String}          href  Location to post to.
 * @apiParam  {String=POST|PUT} verb  Method to use when publishing.
 *
 * @apiSuccess {Boolean=true}           success true if successful. 
 * @apiSuccess {String} info.nowish Date that the server thinks.
 * @apiSuccess {String} info.state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "info": {
 *         "nowish": "2011-01-13T09:45:32",
 *         "state": "STARTED"
 *       }
 *     }
 * 
 * @apiError {Boolean=false}  success false 
 * @apiError {Error}          error   Error that occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Bad-Request
 *     {
 *       "success": false,
 *       "error": "Invalid EndPoint"
 *     }
 */

/**
 * @api {get} /serv/start Start the server
 * @apiVersion 0.0.1
 * @apiName StartServer
 * @apiGroup Server
 * 
 * @apiParam  {String}  token Secret token used when changing service information. 
 * 
 * @apiSuccess {Boolean=true}           success true if successful. 
 * @apiSuccess {String} info.nowish Date that the server thinks.
 * @apiSuccess {String} info.state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "info": {
 *         "nowish": "2011-01-13T09:45:32",
 *         "state": "STARTED"
 *       }
 *     }
 * 
 * @apiError {Boolean=false}  success false 
 * @apiError {String}         error   Error that occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Bad-Request
 *     {
 *       "success": false,
 *       "error": "RejectedToken"
 *     }
 */

/**
 * @api {get} /serv/stop Stop the server
 * @apiVersion 0.0.1
 * @apiName StopServer
 * @apiGroup Server
 * 
 * @apiParam  {String}  token Secret token used when changing service information. 
 * 
 * @apiSuccess {Boolean=true}           success true if successful. 
 * @apiSuccess {String} info.nowish Date that the server thinks.
 * @apiSuccess {String} info.state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "info": {
 *         "nowish": "2011-01-13T09:45:32",
 *         "state": "STARTED"
 *       }
 *     }
 * 
 * @apiError {Boolean=false}  success false 
 * @apiError {String}         error   Error that occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Bad-Request
 *     {
 *       "success": false,
 *       "error": "RejectedToken"
 *     }
 */

/**
 * @api {get} /serv/reset Stops and starts the server gracefully.
 * @apiVersion 0.0.1
 * @apiName ResetServer
 * @apiGroup Server
 * 
 * @apiParam  {String}  token Secret token used when changing service information. 
 * 
 * @apiSuccess {Boolean=true}           success true if successful. 
 * @apiSuccess {String} info.nowish Date that the server thinks.
 * @apiSuccess {String} info.state  State of the server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "info": {
 *         "nowish": "2011-01-13T09:45:32",
 *         "state": "STARTED"
 *       }
 *     }
 * 
 * @apiError {Boolean=false}  success false 
 * @apiError {String}         error   Error that occurred
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Bad-Request
 *     {
 *       "success": false,
 *       "error": "RejectedToken"
 *     }
 */
