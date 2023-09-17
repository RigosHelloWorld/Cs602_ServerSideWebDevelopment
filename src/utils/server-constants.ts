const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQEST_RESPONSE: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGE = {
  BABY_NAME_BAD_REQUEST: 'Expected baby name in the request.',
  BABY_NAME_DELETED_SUCCESSFULLY: 'Successfully deleted baby name.',
  BABY_NAMES_NOT_FOUND_NONE_SAVED: 'No baby names saved',
  BABY_NAME_SAVED: 'Baby name saved successfully.',
  BABY_NAME_SAVE_ERROR: 'Baby name already saved.',
  INTERNAL_SERVER_ERROR: 'An unexpected error occured.',
  NUMBER_GUESSING_BAD_REQUEST: 'Invalid request',
};

const ROUTES = {
  BASE_ROUTE: '/',
  BABY_NAME_BASE_ROUTE: '/babynames',
  BABY_NAME_DELETE_ROUTE: '/delete/:babyNameId',
  BABY_NAME_DISCOVER_ROUTE: '/discover',
  BABY_NAME_LIST_ROUTE: '/list',
  BABY_NAME_SAVE_ROUTE: '/save',
  NUMBER_GUESSING_GUESS_ROUTE: '/guess',
};

export { HTTP_STATUS_CODES, MESSAGE, ROUTES };
