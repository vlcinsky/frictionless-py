from ..metadata2 import Metadata2
from .describe import describe
from .validate import validate
from .. import errors


class Dialect(Metadata2):
    """Dialect representation"""

    describe = describe
    validate = validate

    # Metadata

    metadata_Error = errors.DialectError
