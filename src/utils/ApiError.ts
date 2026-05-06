type ApiErrorOptions = {
  isOperational?: boolean;
  details?: unknown;
  cause?: unknown;
};

export class ApiError extends Error {
  readonly statusCode: number;
  readonly isOperational: boolean;
  readonly details: unknown;

  constructor(
    statusCode: number,
    message: string,
    options: ApiErrorOptions = {},
  ) {
    super(
      message,
      options.cause !== undefined ? { cause: options.cause } : undefined,
    );
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.isOperational = options.isOperational ?? true;
    this.details = options.details;
    Error.captureStackTrace?.(this, this.constructor);
  }

  static badRequest(message = "Bad request", details?: unknown): ApiError {
    return new ApiError(
      400,
      message,
      details !== undefined ? { details } : {},
    );
  }

  static unauthorized(message = "Unauthorized"): ApiError {
    return new ApiError(401, message);
  }

  static forbidden(message = "Forbidden"): ApiError {
    return new ApiError(403, message);
  }

  static notFound(message = "Not found"): ApiError {
    return new ApiError(404, message);
  }

  static conflict(message = "Conflict"): ApiError {
    return new ApiError(409, message);
  }

  static internal(
    message = "Internal server error",
    cause?: unknown,
  ): ApiError {
    return new ApiError(500, message, {
      isOperational: false,
      ...(cause !== undefined ? { cause } : {}),
    });
  }
}
